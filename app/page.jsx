import { createClient } from "@/utils/supabase/server";
import FollowButton from "@/components/FollowButton";


export default async function Home() {

    const supabase = createClient();
    const { data: users } = await supabase.from('users').select('*');


    return (
        <div className="flex flex-col min-w-[23rem] gap-8 justify-center h-screen">

            {
                users.map((user, id) => {
                    return (
                        <figure key={id} className="">
                            <div className="text-white flex items-center justify-between ">
                                <div className="flex gap-3">
                                    <img src={user.avatar} className="rounded-full w-10 h-10"></img>
                                    <div>
                                        <h1 className="flex items-center gap-2">{user.name} <FollowButton/></h1>
                                        <p className="text-zinc-300 text-sm">{user.username}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p>{user.followers}</p>
                                    <p>{user.following}</p>
                                </div>
                            </div>
                        </figure>
                    )

                })
            }
        </div>
    );
}