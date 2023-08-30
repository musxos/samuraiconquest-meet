import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import Config from '@/app/config';

const useOpenboxCommand = () => {
  const { data, error, isError, reset, writeAsync } = useContractWrite({
    address: Config.SAMURAI_WARRIORS_ADDRESS as any,
    abi: [
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_id',
            type: 'uint256',
          },
        ],
        name: 'openCard',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
    functionName: 'openCard',
    mode: 'recklesslyUnprepared',
  });

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return {
    data,
    error,
    isError,
    isLoading,
    isSuccess,
    reset,
    writeAsync,
  };
};

export function prepareMove(targetLand: number) {
  return true; // TODO: need to check if the move is valid
}

export default useOpenboxCommand;
