import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import Config from '@/app/config';
import { useGame } from '@/hooks/useGame';
import { LandState } from '../game/game-slice';

const useMoveCommand = () => {
  const { data, error, isError, writeAsync } = useContractWrite({
    address: Config.GAME_ADDRESS as any,
    abi: [
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_id',
            type: 'uint256',
          },
          {
            internalType: 'uint8',
            name: '_target',
            type: 'uint8',
          },
        ],
        name: 'moveSamurai',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
    functionName: 'moveSamurai',
    mode: 'recklesslyUnprepared',
  });

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return { data, error, isError, isLoading, isSuccess, writeAsync };
};

export function prepareMove(currentLand: LandState, targetLand: LandState) {
  if (!currentLand) {
    console.log('No current land');
    return false;
  }

  if (!targetLand) {
    console.log('No target land');
    return false;
  }

  const targetLandRoads = targetLand.roads.split(',').map((x) => parseInt(x));

  const flag = targetLandRoads.some((x) => x == currentLand.id);

  if (!flag) {
    console.log('No road');
    return false;
  }

  return true;
}

export default useMoveCommand;
