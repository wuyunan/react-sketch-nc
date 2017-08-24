## Components
----
###  ListView


```
 const TwoData = [
    {
        icon: `${IMG_ENDPOINT}image1.jpg`,
        title: '主标题主标题',
        subtitle: '副标题副标题'
    }, {
        icon: `${IMG_ENDPOINT}image2.jpg`,
        title: '主标题主标题',
        subtitle: '副标题副标题'
    }, {
        icon: `${IMG_ENDPOINT}image2.jpg`,
        title: '主标题主标题',
        subtitle: '副标题副标题'
    }
];

```

```
   <ListView
            items={TwoData}
            renderItem={(item) =>
                <TwoRow icon={item.icon}
                        title={item.title}
                        subtitle={item.subtitle}/>}

        />

```

#### props
    1. items
    2. renderItem
    3. renderSpace