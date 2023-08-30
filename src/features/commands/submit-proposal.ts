import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import Config from '@/app/config';

const useSubmitProposalCommand = () => {
  const { config, refetch } = usePrepareContractWrite({
    enabled: false,
  });

  const { data, error, isError, writeAsync } = useContractWrite({
    address: Config.VOTE_ADDRESS as any,
    abi: [
      {
        inputs: [
          { internalType: 'string', name: '_title', type: 'string' },
          { internalType: 'string', name: '_proposal', type: 'string' },
        ],
        name: 'submitProposal',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
    functionName: 'submitProposal',
    mode: 'recklesslyUnprepared',
  });

  return {
    data,
    error,
    isError,
    writeAsync,
    refetch,
  };
};

export default useSubmitProposalCommand;
