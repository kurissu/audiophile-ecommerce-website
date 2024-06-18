import Image from 'next/image'
import Link from 'next/link'
import { Box } from '@chakra-ui/react'

const Logo = (): JSX.Element => {
  return (
    <Box mr={{ sm: 'auto', lg: 0 }} lineHeight="0">
      <Link href="/">

        <Image
          src="/images/shared/desktop/logo.svg"
          height={25}
          width={144}
          alt="Audiophile logo - Home"
        />

      </Link>
    </Box>
  );
}

export default Logo
