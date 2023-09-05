import { Box } from '@/components/Box';
import { ErrorTerminal } from '@/components/ErrorTerminal';
import { Nav } from '@/components/Nav/Nav';

export default function Error() {
  return (
    <Box>
      <Nav />
      <ErrorTerminal />
    </Box>
  );
}
