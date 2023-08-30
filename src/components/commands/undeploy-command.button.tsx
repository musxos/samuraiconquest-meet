import useDeployCommand from '@/features/commands/deploy.command';
import useUndeployCommand from '@/features/commands/un-deploy.command';
import { useGame } from '@/hooks/useGame';
import { useRefetchSamuraiV2 } from '@/hooks/useRefetchSamuraiV2';
import { waitForTransaction } from 'wagmi/actions';
import classNames from 'classnames';
import { useAccount } from 'wagmi';

export function UndeployCommandButton() {
  const refetchSamurai = useRefetchSamuraiV2();

  const { game } = useGame();
  const account = useAccount();

  const { isError, data, isLoading, isSuccess, writeAsync, error } =
    useUndeployCommand();

  const handleClick = async (e) => {
    e.preventDefault();

    if (!account.isConnected) {
      return;
    }

    if (!game.samurai) {
      return;
    }

    const _result = await writeAsync({
      args: [game.samurai.id],
    });

    const transaction = await waitForTransaction({
      hash: _result.hash,
    });

    if (transaction.status != 'success') return;

    await refetchSamurai.refetchSamurai(game.samurai.Id);
  };

  const className = classNames(
    'flex items-center justify-center rounded-full  px-4 py-2',
    {
      'bg-neutral-950/50': isSuccess,
      'bg-neutral-950/10': isLoading,
      'bg-neutral-950/20': !isLoading && !isSuccess,
      'bg-red-500/50': isError,
    },
  );

  return (
    <button onClick={handleClick} className={className}>
      <span>
        {isLoading
          ? 'Undeploying...'
          : isSuccess && !isLoading
          ? 'Undeployed'
          : 'Undeploy'}
      </span>
    </button>
  );
}
