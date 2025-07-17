import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
    <div style={{ boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)' }}>
    <div className='bg-gray-50 p-10  flex justify-center flex-wrap max-sm:flex-col'><p>© IfoodNow - Todos os Direitos reservados - por Whofelisberto</p>
      <ul className='flex space-x-2  sm:pl-10 max-sm:pl-5'>
        <li><a href="https://www.linkedin.com/in/leandro-oliveira-657432263/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="lg" style={{color: "#0770c0",}} /></a></li>
        <li><a href="https://www.instagram.com/leandro_fcrf/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a></li>
        <li><a href="https://github.com/Whofelisberto" target="_blank"><FontAwesomeIcon icon={faGithub} size="lg" /></a></li>
      </ul>
        </div>
        </div>
    </>
  )
}
export default Footer