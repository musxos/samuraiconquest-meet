import { useContractWrite, useWaitForTransaction } from 'wagmi';
import Config from '@/app/config';

const useMintCommand = () => {
  const { data, error, isError, write, writeAsync } = useContractWrite({
    address: Config.SAMURAI_WARRIORS_ADDRESS as any,
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
        ],
        name: 'buyCard',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
    functionName: 'buyCard',
    mode: 'recklesslyUnprepared',
  });

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return {
    data,
    error,
    isError,
    write,
    writeAsync,
    isLoading,
    isSuccess,
  };
};

export default useMintCommand;
