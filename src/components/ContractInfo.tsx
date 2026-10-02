import Address from './Address';
import { FACTORIES, FACTORY_ADDRESS } from '../lib/constants';

const factory = FACTORIES.find(({ address }) => address === FACTORY_ADDRESS);

export default function ContractInfo() {
  return (
    <details className="group border-y border-divider-subtle text-meta text-secondary">
      <summary className="flex cursor-pointer list-none items-center justify-between py-3 hover:text-primary focus-visible:outline focus-visible:outline-1 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
        Contract info
        <svg aria-hidden="true" className="h-3 w-3 transition-transform group-open:rotate-180" viewBox="0 0 16 16" fill="none" stroke="currentColor">
          <path d="m4 6 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <div className="space-y-3 pb-4">
        <p>Ethereum mainnet · Yearn {factory?.version}</p>
        <div className="space-y-1">
          <p className="text-tertiary">Factory</p>
          <Address address={FACTORY_ADDRESS} full className="max-w-full text-data text-primary" />
        </div>
        <p>This factory deploys your escrow and receives your token approval.</p>
        <a
          href="https://github.com/yearn/yearn-vesting-escrow/tree/v0.4.0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block underline underline-offset-4 hover:text-primary"
        >
          Contract source ↗
        </a>
      </div>
    </details>
  );
}
