import { Box } from '@/components/Box';
import { Error } from '@/components/Error';

export default function Error500() {
  return (
    <Box>
      <Error code="500" message="Internal server error" />
    </Box>
  );
}
