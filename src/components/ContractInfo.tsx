import { FACTORY_ADDRESS, getEtherscanAddressUrl } from '../lib/constants';

export default function ContractInfo() {
  return (
    <p className="text-meta text-secondary">
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
  );
}
