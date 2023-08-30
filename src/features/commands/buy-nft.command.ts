import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import Config from '@/app/config';

const useBuyNftCommand = (_id: any) => {
  const { data, error, isError, write } = useContractWrite({
    address: Config.MARKETPLACE_ADDRESS as any,
    abi: [
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'Id',
            type: 'uint256',
          },
        ],
        name: 'buyNFT',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
    ],
    functionName: 'buyNFT',
    args: [_id],
    mode: 'recklesslyUnprepared',
  });

  return { data, error, isError, write };
};

export default useBuyNftCommand;
