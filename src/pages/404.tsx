import { Box } from '@/components/Box';
import { Error } from '@/components/Error';

export default function Error404() {
  return (
    <Box>
      <Error code="404" message="Page not found" />
    </Box>
  );
}
