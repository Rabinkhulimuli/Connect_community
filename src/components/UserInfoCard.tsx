import Image from "next/image";
import Link from "next/link";
import React from "react";

function UserInfoCard({ userId }: { userId: string }) {
  return (
    <div className="p-4 bg-white rounded-lg  shadow-md text-sm flex flex-col gap-4">
      {/* top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link className="text-blue-500 text-xs" href="/">
          See all
        </Link>
      </div>
      {/* bottom */}
      <div className="flex flex-col gap-4  text-gray-500">
        <div className="flex items-center gap-2 ">
          <span className="text-xl text-black">Lyad foyad</span>
          <span className="text-sm">@joana </span>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quia
          nemo corporis modi perspiciatis nostrum molestias sunt asperiores.
          Dolorem quibusdam culpa necessitatibus laborum consequuntur dicta
          minus dignissimos ipsum vero eos.
        </p>
        <div className="flex gap-2 items-center">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>
            Living in <b>new york</b>{" "}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <Image src="/school.png" alt="" width={16} height={16} />
          <span>
            went to <b> eager hss </b>{" "}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <Image src="/work.png" alt="" width={16} height={16} />
          <span>
            Works at <b>Apple.inc</b>{" "}
          </span>
        </div>
        <div className="flex justify-between items-center font-medium">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link
            className="text-blue-500 font-medium"
            href="/lambda">lambda.dev</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfoCard;
