import React, {useState} from 'react';
import {render} from "react-dom";
import './ColorBox.css';

const BoxGenerator = () => {
    const [state, setState] = useState({
        color: "",
        colors: [],
        numDivs: 0,
        submitted: false,
        height: '',
        heights: [],
        width: '',
        widths: []

    })
    const onChangeHandler = event => {
        event.preventDefault();
        setState({
            ...state,
            [event.target.name]: event.target.value

        })
    }

    const clearForm = event => {
        event.preventDefault();
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        let curColors = state.colors;
        curColors.push(state.color);
        let curWidths = state.widths;
        curWidths.push(state.width + "px");
        let curHeights = state.heights;
        curHeights.push(state.height + "px");
        setState({
            ...state,
            numDivs: state.numDivs + 1,
            colors: curColors,
            color: "",
            widths: curWidths,
            heights: curHeights,
            width: "",
            height: "",
            submitted: true
        })
    }

    const drawDivs = () => {
        let views = [];
        for (let i = 0; i < state.numDivs; i++) {
            views[i] =
                <div className="boxes" key={i}
                     style={{height: state.heights[i], width: state.widths[i], backgroundColor: state.colors[i]}}/>
        }
        return (views);
    };

    return (
        <div>
            <form>
                <label>Color</label>
                <input type="text" name="color" value={state.color} onChange={onChangeHandler}/> <br/>
                <label>Height (in pixels)</label>
                <input type="number" name="height" value={state.height} onChange={onChangeHandler}/> <br/>
                <label>Width (in pixels)</label>
                <input type="number" name="width" value={state.width} onChange={onChangeHandler}/> <br/>
                <input type="submit" value="Add" onClick={onSubmitHandler}/>
            </form>

            {drawDivs()}

        </div>
    );
}
export default BoxGenerator;