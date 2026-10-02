import { FACTORY_ADDRESS, getEtherscanAddressUrl } from '../lib/constants';

export default function ContractInfo() {
  return (
    <details className="group text-meta text-secondary">
      <summary className="flex w-fit cursor-pointer list-none items-center gap-2 hover:text-primary focus-visible:outline focus-visible:outline-1 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
        <span aria-hidden="true" className="inline-block transition-transform group-open:rotate-90">&gt;</span>
        Contract Info
      </summary>
      <p className="mt-2">
        <a
          href={getEtherscanAddressUrl(FACTORY_ADDRESS)}
          target="_blank"
          rel="noopener noreferrer"
          className="break-all underline underline-offset-4 hover:text-primary"
        >
          {FACTORY_ADDRESS}
        </a>
        {' | VestingEscrowFactory'}
      </p>
    </details>
  );
}
