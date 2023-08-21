
if [ "$1" = "magicsur" ]  ||  [ "$1" = "all" ]
then
    echo -ne '\n######## magicsur #########\n' ;
    curl "http://localhost/api/get/products-of-a-store?store=magicsur"|python -m json.tool;
fi

if [ "$1" = "magic4ever" ] || [ "$1" = "all" ]
then
echo -ne '\n######## magic4ever #########\n';
curl "http://localhost/api/get/products-of-a-store?store=magic4ever"|python -m json.tool;
fi

if [ "$1" = "guildDream" ] || [ "$1" = "all" ]
then
echo -ne '\n######## guildDream #########\n';
curl "http://localhost/api/get/products-of-a-store?store=guildDream"|python -m json.tool;
fi

if [ "$1" = "boostoretcg" ] || [ "$1" = "all" ]
then
echo -ne '\n######## boostoretcg #########\n';
curl "http://localhost/api/get/products-of-a-store?store=boostoretcg"|python -m json.tool;
fi

if [ "$1" = "geekers" ] || [ "$1" = "all" ]
then
echo -ne '\n######## geekers #########\n';
curl "http://localhost/api/get/products-of-a-store?store=geekers"|python -m json.tool;
fi

if [ "$1" = "weplay" ] || [ "$1" = "all" ]
then
echo -ne '\n######## weplay #########\n';
curl "http://localhost/api/get/products-of-a-store?store=weplay"|python -m json.tool;
fi

if [ "$1" = "araucaniagaming" ] || [ "$1" = "all" ]
then
echo -ne '\n######## araucaniagaming #########\n';
curl "http://localhost/api/get/products-of-a-store?store=araucaniagaming"|python -m json.tool;
fi

if [ "$1" = "entrejuegos" ] || [ "$1" = "all" ]
then
echo  -ne '\n######## entrejuegos #########\n';
curl "http://localhost/api/get/products-of-a-store?store=entrejuegos"|python -m json.tool;
fi

if [ "$1" = "carduniverse" ] || [ "$1" = "all" ]
then
echo -ne '\n######## carduniverse #########\n';
curl "http://localhost/api/get/products-of-a-store?store=carduniverse"|python -m json.tool;
fi

if [ "$1" = "storedevastation" ] || [ "$1" = "all" ]
then
echo  -ne '\n######## storedevastation #########\n';
curl "http://localhost/api/get/products-of-a-store?store=storedevastation"|python -m json.tool;
fi

if [ "$1" = "elreinodelosduelos" ] || [ "$1" = "all" ]
then
echo -ne '\n######## elreinodelosduelos #########\n';
curl "http://localhost/api/get/products-of-a-store?store=elreinodelosduelos"|python -m json.tool;
fi