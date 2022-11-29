import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
    onSubmitSearchForm: PropTypes.func,
};

PostFilterForm.defaultProps = {
    onSubmitSearchForm: null,
}

function PostFilterForm({onSubmitSearchForm}) {
    const [getSearchTerm, setSearchTerm] = useState('');
    const searchTermRef = useRef(null);

    const handleSearchTerm = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (searchTermRef.current) {
            clearTimeout(searchTermRef.current);
        }

        searchTermRef.current = setTimeout(() => {
            onSubmitSearchForm({
                searchTerm: value
            });
        }, 500);
    };

    return (
        <form>
            <input type="text" value={getSearchTerm} onChange={handleSearchTerm}/>
        </form>
    );
}

export default PostFilterForm;