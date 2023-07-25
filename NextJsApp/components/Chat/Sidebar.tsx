import { Button } from "@nextui-org/button";
import { Session } from "next-auth";
import Link from "next/link";
import { FC } from "react";
import { Suspense } from "react";
import { prisma } from "@/config/db";
import { GoodSpinner } from "../NextuiClient";

// import { PlusIcon } from "../icons"; Reduce size of this icon so it looks nice 

interface SidebarProps {
    session: Session,
}

async function Titles ({ UserID }: { UserID: string }){

    // const titles = await prisma.messageGroup.findMany({
    //     where:{
    //         userId: UserID,
    //     }
    // })

    await new Promise((resolve) => {
        setTimeout(resolve, 1000); 
    });

const titles = [{id:'danmda',userId:'jsnffsfs',Title:'dummy 1'}, {id:'danmifaniada',userId:'jsnjfnwffsfs',Title:'dummy 2'}, {id:'dfafanmda',userId:'jsnfwfffsfs',Title:'dummy 3'}]

    return (
        <>
            <div className="flex flex-col mt-2">
                {titles.map((title, index) => 
                    <Link key={index} className="text-purple-500 mt-4" href={`/chat/${title.id}`}>{title.Title}</Link>
                )}
            </div>
        </>
    )
}


const Sidebar:FC<SidebarProps> = ({session}) => {

    return (
        <>
            <div className="w-1/6 flex flex-col items-center">
                <Button className="mt-4" as={Link} href="/chat" color="secondary" variant="ghost">New Chat</Button>
                <Suspense fallback={<div className="mt-20"><GoodSpinner /></div>}>
                    <Titles UserID={session.user.id}/>
                </Suspense>
            </div>
        </>
    )
}


export default Sidebar;