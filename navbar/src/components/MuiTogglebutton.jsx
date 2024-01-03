import {ToggleButton} from "@mui/material"; 
import {ToggleButtonGroup} from "@mui/material"


const MuiTogglebutton= () => {
    return( 
<div>
<ToggleButtonGroup>
    <ToggleButton value="All">
            All
    </ToggleButton>
    <ToggleButton value="Apparel">
            Apparel
    </ToggleButton>
    
    <ToggleButton value="Electronics">
            Electronics
    </ToggleButton>
    <ToggleButton value="Footwear">
            Footwear
    </ToggleButton>
    <ToggleButton value="Personal Care">
            Personal care
    </ToggleButton>
</ToggleButtonGroup>
</div>
    );
}
export default MuiTogglebutton;