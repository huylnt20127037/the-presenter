import { Link } from "@chakra-ui/react"

const AppLink = ({text, path}) => {
  return <Link href={path} color='accent'>{text}</Link>
}

export default AppLink