import { GITHUB_LINK } from '../../../../constant/linkApp'
import * as style from '../../../../styles/webpage/footer/footer'
import IconGithub from '../../../images/IconGithub'

const SampleFooter = () => {
  return (
    <style.FooterStylesTwo>
      <style.IconLink href={GITHUB_LINK}>
        <IconGithub />
      </style.IconLink>
      <style.FooterTextTwo>Farm Habit © 2023</style.FooterTextTwo>
    </style.FooterStylesTwo>
  )
}
export default SampleFooter
