import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | 랩매니저 PRO',
    default: '랩매니저 PRO, 연구실 통합관리 솔루션',
  },
  description: '시약 관리부터 구매까지 랩매니저 PRO로 한번에! 유료 요금제 결제시 머크 전상품 10% 상시 할인. 모바일 앱과 PC에서 간편 시약 등록부터 시약 위치까지 한눈에 확인할 수 있어요. 더 이상 관리에 시간 낭비하지 마세요, 연구에 집중하세요.',
    openGraph: {
      title: '랩매니저 PRO, 연구실 통합관리 솔루션',
      type: 'website',
      description: '',
      url: 'https://www.lab-manager.com/',
      locale: 'ko_KR',
      // images: '',
    }
}

// export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
//   return {
//     title: '랩매니저 PRO, 연구실 통합관리 솔루션',
//     description: '시약 관리부터 구매까지 랩매니저 PRO로 한번에! 유료 요금제 결제시 머크 전상품 10% 상시 할인. 모바일 앱과 PC에서 간편 시약 등록부터 시약 위치까지 한눈에 확인할 수 있어요. 더 이상 관리에 시간 낭비하지 마세요, 연구에 집중하세요.',
//     openGraph: {
//       title: '랩매니저 PRO, 연구실 통합관리 솔루션',
//       type: 'website',
//       description: '',
//       url: 'https://www.lab-manager.com/',
//       locale: 'ko_KR',
//       // images: '',
//     }
//   }
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
      </body>
    </html>
  )
}
