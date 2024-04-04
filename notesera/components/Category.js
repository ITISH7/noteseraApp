import { ScrollView, TouchableOpacity, View , Text, Image} from "react-native"

import { allcollegeData } from "../data/Data"
import { useState } from "react"
const Category=()=>{
    const [activeCollege,setActiveCollege]=useState(null)
    return(<View clasName="mt-4 ">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} clasName='overflow-visible' contentContainerStyle={{
            paddingHorizontal:15
        }}>
            {
                allcollegeData.map((dataitems,index)=>{
                    let isActive = dataitems.id === activeCollege;
                    let btnclass = isActive?'bg-gray-400':'bg-gray-100';
                    return(<View key={index} className="flex justify-center items-center mr-6 mt-4">
                        <TouchableOpacity className={"p-3 rounded-full shadow "+btnclass} onPress={()=>{
                            setActiveCollege(dataitems.id)
                        }}>
                            <Image style={{width:45,height:45} } source={{ uri: dataitems.collegeLogo}}/>
                            
                        </TouchableOpacity>
                        
                        <Text className="from-stone-200">{dataitems.name}</Text>
                            

                        
                    </View>)
                })
            }
        </ScrollView>
    </View>)
}


export default Category