import { Box } from '@/components/Box';
import { Error } from '@/components/Error';
import { Nav } from '@/components/Nav/Nav';

export default function Error404() {
  return (
    <Box>
      <Nav />
      <Error code="404" message="Page not found" />
    </Box>
  );
}
