import { MQContext } from '@/context/MQ';
import { useContext } from 'react';

export const useMQ = () => useContext(MQContext);
