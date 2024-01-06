import Page from '@components/Page';
import { Title } from '@components/ui/Typography';
import { Button } from '@components/ui/shadcn/button';
import { useTranslation } from '@services/i18n/useTranslation';
import { useAuthStore } from '@services/state/auth/auth.stores';
import { toast } from 'sonner';

const FeaturesPage = () => {
  const t = useTranslation();
  const { reset, setBot, bot } = useAuthStore();

  const handleCLick = () => {
    toast('toasted', {
      action: {
        label: 'action',
        onClick: () => {
          console.log('clicked');
        }
      }
    });
  };

  return (
    <Page>
      <Title>{t('features.title')}</Title>
      <Button
        variant="ghost"
        className="animate-in zoom-in duration-500"
        onClick={handleCLick}
      >
        toast
      </Button>
      <br />
      <br />
      <Button variant="outline" onClick={reset}>
        clean auth store
      </Button>
      {bot && (
        <Button
          variant="outline"
          onClick={() => setBot({ ...bot, status: 'active' })}
        >
          active bot
        </Button>
      )}
      {bot && (
        <Button
          variant="outline"
          onClick={() => setBot({ ...bot, status: 'pending' })}
        >
          deactive bot
        </Button>
      )}
    </Page>
  );
};

export default FeaturesPage;
