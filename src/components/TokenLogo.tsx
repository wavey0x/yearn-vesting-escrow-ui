import { useState, useMemo } from 'react';
import { getTokenLogoUrls } from '../lib/constants';

interface TokenLogoProps {
  address: string;
  symbol?: string;
  logoUrl?: string | null;
  size?: 32 | 128;
  displaySize?: number;
  className?: string;
  hideWhenUnavailable?: boolean;
}

export default function TokenLogo(props: TokenLogoProps) {
  return <TokenLogoImage key={`${props.address.toLowerCase()}:${props.size ?? 32}:${props.logoUrl ?? ''}`} {...props} />;
}

function TokenLogoImage({
  address,
  symbol,
  logoUrl,
  size = 32,
  displaySize = size,
  className = '',
  hideWhenUnavailable = false,
}: TokenLogoProps) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Build URL list: cached URL first (if available), then fallbacks
  const urls = useMemo(() => {
    const fallbackUrls = getTokenLogoUrls(address, size);
    return [...new Set(logoUrl ? [logoUrl, ...fallbackUrls] : fallbackUrls)];
  }, [address, size, logoUrl]);

  // All sources exhausted - show letter fallback
  if (sourceIndex >= urls.length) {
    if (hideWhenUnavailable) return null;
    return (
      <div
        className={`flex items-center justify-center bg-divider-subtle text-secondary rounded-full ring-1 ring-secondary/30 ${className}`}
        style={{ width: displaySize, height: displaySize }}
      >
        <span className="text-xs font-medium">
          {symbol?.charAt(0).toUpperCase() || '?'}
        </span>
      </div>
    );
  }

  return (
    <img
      key={urls[sourceIndex]}
      src={urls[sourceIndex]}
      alt={hideWhenUnavailable ? '' : symbol || 'Token'}
      width={size}
      height={size}
      className={`rounded-full ring-1 ring-secondary/30 ${className}`}
      style={{ width: displaySize, height: displaySize, display: hideWhenUnavailable && !loaded ? 'none' : undefined }}
      onLoad={() => setLoaded(true)}
      onError={() => {
        setLoaded(false);
        setSourceIndex((i) => i + 1);
      }}
    />
  );
}
