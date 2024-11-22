import { TagContainer } from './styles'

type Props = {
  text: string
}

const Tag = ({ text }: Props) => (
  <>
    <TagContainer>{text}</TagContainer>
  </>
)
export default Tag
