import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} · Polimat` : 'Polimat';
  }, [title]);

  return null;
});

export default PageTitle;
