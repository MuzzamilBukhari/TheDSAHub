import Image from "next/image"
import Link from "next/link"
import { Button } from "../"

const BlogCard = ({
  title,
  desc,
  slug,
  imgUrl,
}: {
  title: string
  desc: string
  slug: string
  imgUrl: string
}) => {
  return (
    <div className="px-0 py-4 sm:p-4">
      <div className="h-full border-2 border-primary rounded-lg overflow-hidden flex flex-col">
        <Image
          className="w-full h-56 object-cover object-center"
          src={imgUrl || "/placeholder.svg"}
          alt={title}
          width={700}
          height={300}
        />
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex-grow">
            <h1 className="title-font text-lg font-semibold text-primary mb-3 line-clamp-2">{title}</h1>
            <p className="leading-relaxed mb-3 line-clamp-4">{desc}</p>
          </div>
          <div className="flex justify-center mt-auto">
            <Link href={`/blogs/${slug}`}>
              <Button type="button" className="bg-primary">
                Read more
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard

