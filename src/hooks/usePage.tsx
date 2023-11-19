import { useEffect } from "react";

export function usePage(name: string) {
  // TODO In a SPA, keyboard focus and Screen reader annoncement should be handled on a page transition
  useEffect(() => {
    document.title = `${name} - Zeffy`;
  }, [name]);
}
