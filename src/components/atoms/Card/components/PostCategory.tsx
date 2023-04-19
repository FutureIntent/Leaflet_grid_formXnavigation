import Typography from "@components/atoms/Typography";

const PostCategory = ({ category }: { category: string | undefined }) => {
  if (!category) return null;

  return (
      <Typography variant="caption" color="var(--grey-dark)" transformText="uppercase">
          {category}
      </Typography>
  )
}

export default PostCategory;