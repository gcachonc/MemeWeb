import { useEffect, useState } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Home.css";


const Home = () => {

    const [memes, setMemes] = useState([])
    useEffect(()=> {
        axios.get("https://api.imgflip.com/get_memes").then(
            (response) =>{
                setMemes(response.data.data.memes);
            }
        )
    }, [])

    return(
        <div className="cardsConstainer">
            {console.log(memes)}
        {memes.map((meme, index)=>(
            <div className="item" key={index}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        width="200"
        image={meme.url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {meme.name}
        </Typography>
      </CardContent>
    </Card>

            </div>
        ))}
        </div>
    );
}

export default Home;
