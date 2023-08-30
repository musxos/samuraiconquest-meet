import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import Config from '@/app/config';

const useRegisterCommand = () => {
  const { data, error, isError, reset, writeAsync } = useContractWrite({
    address: Config.GAME_ADDRESS as any,
    abi: [
      {
        inputs: [
          {
            internalType: 'string',
            name: '_nickName',
            type: 'string',
          },
          {
            internalType: 'address',
            name: '_refer',
            type: 'address',
          },
        ],
        name: 'register',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
    functionName: 'register',
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
export default useRegisterCommand;
