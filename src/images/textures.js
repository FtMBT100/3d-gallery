import { NearestFilter, TextureLoader ,RepeatWrapping} from 'three'
import {
	BAZALTaoImg,
	BAZALTdiffuseImg,
	BAZALTnormalImg,
	GrassGreenImg  
} from './images'

const BAZALTaoTexture = new TextureLoader().load(BAZALTaoImg)
BAZALTaoTexture.magFilter = NearestFilter;
BAZALTaoTexture.wrapS = RepeatWrapping;
BAZALTaoTexture.wrapT = RepeatWrapping;



const BAZALTdiffuseTexture = new TextureLoader().load(BAZALTdiffuseImg)
BAZALTdiffuseTexture.magFilter = NearestFilter;
BAZALTdiffuseTexture.wrapS = RepeatWrapping;
BAZALTdiffuseTexture.wrapT = RepeatWrapping;


const BAZALTnormalTexture = new TextureLoader().load(BAZALTnormalImg)
BAZALTnormalTexture.magFilter = NearestFilter;
BAZALTnormalTexture.wrapS = RepeatWrapping;
BAZALTnormalTexture.wrapT = RepeatWrapping;



const glassTexture = new TextureLoader().load(GrassGreenImg)
glassTexture.magFilter = NearestFilter;
glassTexture.wrapS = RepeatWrapping;
glassTexture.wrapT = RepeatWrapping;




export {
	 BAZALTaoTexture,
	 BAZALTdiffuseTexture,
	 BAZALTnormalTexture,
	 glassTexture
}