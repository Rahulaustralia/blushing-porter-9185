import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';
import { ReactElement } from 'react';
import "../styles/HomePage.css"


const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <div className='RPhomemain'  maxW={'5xl'} py={12}>
      <div className='Rpc1'> 
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <div spacing={4}>
         
          <Heading className='Rphomeheading' fontSize={'60px'}>Empower your <br /> Team with Time <br /> Tracking</Heading>
          <Text className='RPhometest' fontSize={'20px'}>
          TMetric streamlines your team work so you can focus on what <br /> matters
          </Text>
          
        </div>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://tmetric.com/media/nb3imgh0/img-home-heading.svg'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
      </div>
      <div className='RPhomeimage1'>
        <img src="https://tmetric.com/media/zlalggkp/saasworthy_2021_main_page.png" alt="error" />
        <img src="https://tmetric.com/media/w4mhgaul/time-tracking-software.png" alt="error" />
        <img src="https://tmetric.com/media/mg3fi1e4/crozdesk_2022_main_page.png" alt="error" />
        <img src="https://tmetric.com/media/c2eewysw/g2_2022_main_page.png" alt="error" />
        <img src="https://tmetric.com/media/cwnfzugf/icon-capterra-shortlist.png" alt="error" />
        <img src="https://tmetric.com/media/psxgf3r4/icon-software-advice-frontrunners.png" alt="error" />
        <img src="https://tmetric.com/media/jfxavlps/getapp-logotype.svg" alt="error" />
        <hr />
        </div>
        <div className='RPhead'>
          <h1>Best time tracking features for <br /> your business</h1>
        </div>
    </div>
  
  );
}
