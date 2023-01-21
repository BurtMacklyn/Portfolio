import { Box } from '@/components/Box';
import { Error } from '@/components/Error';
import { Nav } from '@/components/Nav/Nav';

export default function Error500() {
  return (
    <Box>
      <Nav />
      <Error code="500" message="Internal server error" />
    </Box>
  );
}
