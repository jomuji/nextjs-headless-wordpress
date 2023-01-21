import {isEmpty} from 'lodash';
import PropTypes from 'prop-types';

import Nav from './nav';
const Header = ( {header, headerMenus, slug} ) => {

	if ( isEmpty( headerMenus ) ) {
		return null;
	}

	return (
		<header className="top-header bg-transparent fixed top-0 left-0 right-0">
			<Nav header={header} headerMenus={headerMenus} slug={slug}/>
		</header>
	);
};

Header.propTypes = {
  header: PropTypes.object,
  headerMenus: PropTypes.array,
  slug: PropTypes.string
};

Header.defaultProps = {
  header: {},
  headerMenus: [],
  slug: ''
};

export default Header;
