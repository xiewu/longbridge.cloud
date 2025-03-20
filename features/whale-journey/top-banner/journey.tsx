import { TopBlock } from '@/components/block'
import { useTranslation } from 'next-i18next'
import styles from './index.module.scss'
import classNames from 'classnames'

export const WhaleJourneyBanner = () => {
  const { t } = useTranslation('common')

  return (
    <TopBlock
      imageUrl="https://assets.lbctrl.com/uploads/8fa4eaa5-9e38-438a-b656-827a852ed4b5/bg.png"
      className={classNames('h-[530px]')}
    >
      <div className={classNames('main-container', 'h-full', styles['journey-banner-container'])}>
        <div className={classNames('py-10 h-full')}>
          <div className="main-content-width h-full">
            <div className="flex justify-center md:justify-start h-full items-center">
              <div className="text-[#FFC977]">
                <div
                  className={classNames(
                    'text-3xl  italic font-light leading-none md:text-6xl  en:md:text-[80px] en:font-bold'
                  )}
                >
                  {t('whale-journey.top-banner.journey.title1')}
                </div>
                <div
                  className={classNames(
                    'text-[44px] md:leading-tight italic font-bold leading-none md:text-[80px] en:bg-clip-text en:bg-gradient-to-r en:from-[#FFC977] en:to-[#FFAC2F] en:[-webkit-text-fill-color:transparent]'
                  )}
                >
                  {t('whale-journey.top-banner.journey.title2')}
                </div>
                <p className=" hidden en:block en:md:hidden mt-3 text-xs leading-normal">
                  {t('whale-journey.top-banner.journey.description')}
                </p>
                <img
                  className="mt-10"
                  src="https://assets.lbctrl.com/uploads/74cc2950-74d4-42e6-b79c-6dcb5b7b8c2e/group.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </TopBlock>
  )
}
