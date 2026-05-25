import { useContext } from 'react';
import { NetworkContext } from '../contexts/network-context';

export function useNetwork() {
  return useContext(NetworkContext);
}
