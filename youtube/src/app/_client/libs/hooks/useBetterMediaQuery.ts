import React from "react"

export function useBetterMediaQuery(mediaQueryString: string) {
  const [matches, setMatches] = React.useState<boolean | null>(null);

  React.useEffect(() => {
      const mediaQueryList = window.matchMedia(mediaQueryString);
      const listener = () => setMatches(!!mediaQueryList.matches);
      listener();
      mediaQueryList.addListener(listener);
      return () => mediaQueryList.removeListener(listener);
  }, [mediaQueryString])

  return matches;
}