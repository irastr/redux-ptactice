import {connect} from 'react-redux'
import {setVisibilityFilter} from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
};

//Функция mapStateToProps объявляется с двумя параметрами, второй из которых является необязательным.
// Первый параметр представляет собой текущее состояние хранилища Redux.
// Второй параметр, если его передают, представляет собой объект свойств, переданных компоненту:

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink
