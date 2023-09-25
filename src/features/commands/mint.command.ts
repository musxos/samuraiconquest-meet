import { useContractWrite, useWaitForTransaction } from 'wagmi';
import Config from '@/app/config';
import { parseEther } from 'viem';
const useMintCommand = () => {
  const { data, error, isError, write, writeAsync } = useContractWrite({
    address: Config.SAMURAI_WARRIORS_ADDRESS as any,
    abi: [
      {
        inputs: [
          {
            internalType: "address",
            name: "to",
            type: "address"
          }
        ],
        name: "buyCard",
        outputs: [],
        stateMutability: "payable",
        type: "function"
      }
    ],
    functionName: 'buyCard',
    mode: 'recklesslyUnprepared',
    value: parseEther('0.01')

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
