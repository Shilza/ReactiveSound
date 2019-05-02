import React from "react";
import {withPlayer} from "../../organisms/withPlayer";
import {Button, Icon} from "../../../../ui/atoms";

export const PlayButton = withPlayer(({onPlay, isPlay}) => (
    <Button onClick={onPlay}>
        {
            isPlay ?
                <Icon name='pause' viewBox='0 0 420 420' fill='#4d4e4f'/>
                :
                <Icon name='play' viewBox='0 0 420 420' fill='#4d4e4f'/>
        }
    </Button>
));