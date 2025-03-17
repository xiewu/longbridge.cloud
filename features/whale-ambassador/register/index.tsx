import { Modal, ModalProps } from '../modal'
import { RegisterFrom } from './register-from'
import { Referrer } from '@/services/whale-ambassador'
import { useState } from 'react'
import { RegisterSuccess } from './success'
import { RecommendForm } from './recommend-from'
import { SharePosterModal } from './share-poster'
import { useTranslation } from 'next-i18next'

interface RegisterFormModalProps extends ModalProps {}

export const RegisterFormModal = (props: RegisterFormModalProps) => {
  const [action, setAction] = useState<'recommend' | 'share' | undefined>()
  const [referrer, setReferrer] = useState<Referrer | null>({
    name: '2344242',
    company: '1435315314',
    position: '134515',
    phone: '852-13451345',
    email: '4353145135@qq.com',
    vcode: '164416',
    code: 'cvbs1o5h2omu7rag5m20',
  })
  const { t } = useTranslation('common')
  return (
    <Modal {...props} title={t('whale-ambassador.become-ambassador')}>
      {referrer ? (
        <RegisterSuccess
          referrer={referrer}
          onClickFillRecommendInfo={() => setAction('recommend')}
          onClickShareInvitePoster={() => setAction('share')}
        />
      ) : (
        <RegisterFrom onSuccess={setReferrer} />
      )}
      <Modal
        open={action === 'recommend'}
        title={t('whale-ambassador.fill-recommend-info')}
        onClose={() => setAction(undefined)}
      >
        <RecommendForm referCode={referrer?.code} />
      </Modal>
      <SharePosterModal
        open={action === 'share'}
        onClose={() => setAction(undefined)}
        name={referrer?.name!}
        code={referrer?.code!}
      />
    </Modal>
  )
}
