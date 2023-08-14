import { UserProfile, ProjectInterface } from '@/common.types';
import { getUserProjects } from '@/lib/actions';

type Props = {
  userId: string;
  projectId: string;
};

const RelatedProjects = async ({ userId, projectId }: Props) => {
  const result = (await getUserProjects(userId)) as { user?: UserProfile };

  const filteredProjects = result?.user?.projects?.edges?.filter(
    ({ node }: { node: ProjectInterface }) => node.id !== projectId
  );

  if (filteredProjects?.length === 0) return null;

  return <section>RelatedProjects</section>;
};

export default RelatedProjects;
