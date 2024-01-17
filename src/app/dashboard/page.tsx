
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

const Page = async () => {
 
    const { getUser } = getKindeServerSession();
    const user = getUser();
    const UserInfo = await Promise.resolve(user);
      
    if (!UserInfo || !UserInfo.id) redirect('/auth-callback?origin=dashboard')
      
    return <div>hello </div>;
 
};

export default Page