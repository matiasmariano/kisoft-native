import httpClientApi from '../../../../core/config/axios/httpClients/httpClientApi'

export const get = async () => {
    return {
        data: [{
            titulo: 'Gastronomia',
            img: 'https://laverdadonline.com/wp-content/uploads/2019/10/xgastronomia-almeria-plato-jpgqitokp_pz-qe_-pagespeed-ic-mwgxz8yzo4.jpg',
            id: 1
        },{
            titulo: 'Espectaculo',
            img: 'https://statics-cuidateplus.marca.com/sites/default/files/styles/natural/public/montadores-espectaculos.jpg?itok=Vq1KeYt4',
            id: 2
        },{
            titulo: 'Aventura',
            img: 'https://afueraesmejor.com/wp-content/uploads/2018/04/aventura-escalada.jpg',
            id: 3
        },{
            titulo: 'Relax',
            img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTExITFhUXFRAVFRcVFxUVEhUVFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHyUtLS0tLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0uLS0tLS0tLS0tLS0tKy0tLS0tLS0tLf/AABEIAKgBKwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAECBQAGB//EAEEQAAEDAQYCBwYDBgUFAQAAAAEAAgMRBBIhMUFRBWEGExRxgZGhIjJCUrHRU2KiBxVyksHwY4LC4fEWI0Oy0jP/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QALBEAAgICAQMDBAEEAwAAAAAAAAECEQMSIQQTUTFBYSJxkbEyUqHh8AVCgf/aAAwDAQACEQMRAD8A+zgqVnRW4ahM9qbuimK0MhSgNmCMHJDFJ7M5xzS01lcBWq1LwQZ/awqmmJoxHCgxVI3MrktJ9jB3KBJZTo1aKSIcWTJPG0YLKtEl4ph1mOyllgOgKpUiJbMypIkIsWlPZiEAwrVSMnBijWp2zgKG2daFgs7SQClKSocIOy1maUOWMkrf7K2iDLE0aLDfk6NODJjsSLGANE9HQaIMrS7II2sNUgMj+aEXc0XsbioNjITVC5AmQIV4po2eio5qdiaAYqCilvNULEyQZXBqJcCmlE7AoWkLg0lWLgoFpI0RyHBdsbtlX2lItLtleNrnJfcfr6A2sJ1RRDzTMdm3R2gDRS5FKIi2GnwozcPhTVVUuU2UoghXZc5x0Cl7uaA953QBWSdw0Q+0nkqujcVXqnK+COR/t7flUttw+VJiyuGRCkh40CiolXL3HHcRpkEL94uQbjzoFzrK/kmlEHsEktxKGLWQq9lcu7KU/pFUhhnE3ckRvFNwlm2Pmrt4fXVL6RrcL+8G/KqHin5VV3Dio/d7kfQH1gp7bU+6gYuTjLMW5tqnoCwfBTwRsl6Bq36mWyyPOi0LJYiM031o0VHTuGilzbKUEhhjO9Tcalm2o7Kj7cNipKHbgXdUEgbeNlQ28p0xWjRMQ2Uhizo+IHkj9rPJFUFoYdZ2nRUdZG7IDrUeSr2t3JABOwNVTYWqO2qktt2T5DgiSyDRLusu5VZLS46pR8p3VpMzbQeWBuhQ2wjdLlxUXirpkbLwFc6iIy1OGyVxUGqKFbNH94U0UfvELLeUFxTWNA8jNl1vCE62DdZN5QZE+2ie6zW7UFItAWMZiqumKO0HdNvtHNUMnNYhkKHfKfaDvfB6NkhRRM5Zwm5q/aOaxcTdSNDrnFSXOOqzhPzVhaeaWo90aTJHDNWM3JZotXNT2rmEtGPdDptHJWFsOyz+1dygWkbhGgtvk1GWzdFFtWV2kclHaAloVubInB0VHS+Cyev5qH2mmZR2w3RoSE7oTnu3WfFxJhycMOaQ/wCqLOZep6xt/aqpRYnJG71p3UX0rHa2uGBBSs/F4WkgyNHiE6Jb+TTMiqXLyFp6c2RrrvXNwzpihz9P7GBUSA9yrUhzR7EuXX14azftEszmuJddocAcyN1p8L6YWWf3ZGg5UOB8inqLZHpjJzVb6A2UEVBU30qHYYvVS9CL1BenQi5cuKA4qL6dCsKVYRlL9ZzSsnFGNcGF4DjkK4p0xXH3NMuIQg+qVktApUlJ2fi0TyWteCRnQ5IUQclZsCGuqpJEBqsVvGoS64JAXbVxQ5ONwh1wyNrtVPVic4+DXNN1aN8eqw5+NQtNHSNB710/FYmAFzwAclWpKml7G+Z4hoqutMXyrEFvYWX7wu76IFm4rFISGPBI2KXbH3X8G1JNH8qAZW7LEtPHIGG66RoPejR25jgCHAg5KlElzPWCyjZWFkCbDFYMXLszq1Qn2IIVphjjaXvcGtGZcQGjvJWk5q+evB4nb3xknstnOLa4SPrQV7yHeA5pObRUYJm3DxqyP9x73D5mxyln84bRPxxMeLzXXgciDULSjhAAaGgNAoABQAbUWRbYzA/rG+6ffG41/wAwzB5UWU80sbuXp+v8GkcMMnEfX9lpbEDqUKLhwbkXea0SdlIXTsc2qEHWc7lLSROHxOWu5qWlammJxMp975nKlvYZmtaS5t3UHE4UTUrVViskyYejzBUBzxXPEro+hlnJrdxzrr5reianYApchqJncP4A2Jt1hcAdKpS0dDrO4lzowScycSV6ti54We7NNEePHQqy/gt8gpHQqyfgt8gvWEKAnuxaI8m7oVZPwW+Sp/0VZfwm+S9gGBT1aN2HbRhwWExtDWk0Cv1Lt1qvgVDCnuLQzCxw1VSHbrS6nkhSxKlIlxMtxduhuc7cp97AgujC0TMmhQvdusubhTHP6wirgag6hbT2BDuKkyWhGaEuaWkmhWbZOj8cRJZUEihK37ikNRYUebg6MxMffAN7HHXFUPRSEuv0N6ta61XqerU9WlY9TyM/RKFzrxBJRLV0ZjkADqkNFANF6dzAoDQnsLU867gjTF1NTc2CXsPRxkJJYSCcF6lzQhOYEWDieRtHRKJzi51STmUePgLWgAOdQZZr0j2BUuBOxant21V6rgrhcJ3mbx23dTZ5ZBm2N5HfT2fWi87+y6yXLIZNZZHuJ1o32B9D5rQ/aC+lgm5iMecjUToNGBYbOP8ADB/mJP8AVT/2LX8TeKV4hFeYR4jvCcogTFEoqScX7ijJxkpL2MrhMnsXflN3wzb6Gngng5ZHDZh1srNv9LiPoQtRoUdNJvEr9fT8cF9TFLK6+/55LuIQJUQpSZpK6EYMDMQqNdyVZY6hLBjtHqyDSY78qcs4qsiISD4gU/EXAAqWikbMbQuc0IMLzRWfJRZmhDmBQ6MKBLyU3kCK3BzUPj2qr3wq9YN0wBFh5obgd1eR79KJeSR/JUiWc5790KRz+Ss6V2rfJAfIdlaM2wb3FBLiomtFNCgPtAWiRky7nqnWIbpRuqXuaskMZCp69AdKpDwgEw7LWETtCA13cu6wKSrCdaFV8gVQ8aqj3N1QBHWAqCQhuuqpLUySXkboPiuf3oVExH0RstdFa8ECSQDn3IXXclx0d1mB+0i3RtsjoiTfkALQBhRj2lxJ0SXQ7jzeyRM66ztLG3S1zvbwJAqCRTRKftHna7q8dJGuFcaEsI+hXnODt6mYBrS5pF4C6Catuuzpu2niuLLm1m0d+HDtBM+iT9IWNNDaYgKHJzM60wrVL2rpJDSrZy7P3AXYgVp7LeRWPapnAMbcxBukkgbxn0hKHw2yy/8AcqW5hxqSamoZ/ok81j3uPX9mywLx+heXiLYHulhEpe8G86U51q4C7mMthkvY8MtfWRMecLzWuPeRivEWizEskdUEEt8BiNeQK0ujnGaxBl33QRjUYA51OiOm6iMG9m6+bF1XTOaTglZ6wyqplcdElYLUJWh7TUGvmDQjzCK57l6ypnkO06K2qSgqlOtaEKS8445IM7aZYq0kS2zUhex2tE3FZjo40WDDIVrWCd3IpSTBNM1oXkZlWfOgRuB3Ch5GhWVGlhuvBU17kg+XaqyYOkMTpTCyRrniuArpiQDkSnQWz0t5VfJQZLPbayMSFYcRBzT1ZOyOltbRm5VdaIvmUyTxnOiWmscLtaK1RLv2DiRlMHFUldhmkXcLGknqgPsrh8VVSS8kNvwHnlrqlXuAzQJbwQy5y1SMmwpeFUk7pZz3KpkcmSMUduiBruSQMr9VZkkmhQJDMjZB7tEAPmBxAKIJn00UvmdSqRRItpGYUSW5tMaJd9rNcW1VHWlusZQKwnbGHZWdODklZJ4nH3aeBQ3WdmjqJi5DvnOysJzslmQUydVEud6Bcn02q8x0t4m5j42BpLHNeXBrrrqgimoqM8KjNbrZ20qCV5npjRzoXN3lafENP9F5fU2sTaPY6VJ5YpmFPYI5dJhkQBFXOmBIJBzBT1nhLXNo2Z4bk3qXjnmdO7dadhjxbzLT4FjKf+pWlEyjieRp6fZeRjlabs9jJw0jBksr5Km44Vw90409on2y2mLneaLPFNUAAUNKn2W6ucMnO1kf6LeEeA/iDfE4n6KZW+rw0dwICpuvchOzCbwp2ADY24ivvSH4jrQZ8tVNssJd773vwyJoylTX2WgA5a1XoRHiT3U8v90rPBl/C/6j/wClzzfHBvD15MHo21wY9tQGtlkHhgf6rWBBBocN1j2YXJJm/wCID/M0FNvlwuhfRdK9sMX8Hz/VrXNJfJSaYk0b4lLTSga1QnykGmFFXrmE4hdRyjDSN8U3DOWanHZZ4gY7I4pxhLWgUQxI1I7RgCHHmrm3NIpj3rJFoAzBUSW1rcs9lGpWwTjlpayzyuDiKtLRvV2H3PgvmvDpDE6OWoaesIbTM3RVxpti0eK9R0wmJhjp8bnk97cKep815NtjvBrtg5vmsJ8u0dmPiP8AvufX7FamzRMfUC8AaHTcIk1hqMHBeN6J2sugLXGpY4gA5AEAgfVaVrfJQUHkVtFWjlycNqjQl4WRiHVPegusRG9e9Zr7TO3fzUC0zalaqzFteB11nkHuuwU33CtUp2yTVS+1uOZTVidBC4nVBkcUJ8vNAc99c1RDLvL9ErJJIDlVS6V+6EbW4KiSzbRIqvtknyqwtddArGfUUQFAhbpBohy8RfzTLbdQ4tC7r4ycQEv/AAK+QDeJkZtJRv3mNlIYzSiq5g+UFPgVS8lRbgdK+Cq62tGbCqOtUbcC2i7tsR0QD+5x4g060VhbW8/78EHqo3Y0C7scaCeT6NFbmE4FJcfF4R8pB6tcPstTq2bNCBxOBvV1HzRkfzgH6rzOp5xSXwz2OndZYv5QKwxexGeUX6S5p+oT7Yj1nKmXeF1li9hoAx/7gprW+HJxwNamjakDc+mC+fhdHtZJcg7PD7OOBBLvMkD6qbfZAGEg4ihHfmnIogc/7AU2hpMZH5XH1oFv6pmG3KEbQy6KDcLpIxeA/IR50P8ApWi9mB/hPmUOJgc1pIB97TlyUShZUch5C3wtbIXEe81p76YJV5Jaaez9VrdJyGFtK1F4HUCuIFfA+RXmZ7SRzK9r/j77CXi/2eZ11PK35ou1t4dyq6IAc1SGQ+8cOWiC+ffVd/Jw0hqyvbXbfZbVmkjOrcOea8o2VrXZo4tURIqSO6tEmrEnR6OaNrjVop3JOaKnM80nFbmjBslSdtEYTuFCfOqQ3yZ3HGF1ma53wyvAps5rT9QV56xPAeWnI5d69pb7slkkc7C49pw1JaQPWi8ZNEQ4HfFZRfLXydkf4xNOyWUi9StCdDTFE4sZYrM97HhsjXtqK3vYy1/McVMB9h0pqRGHOug0Li1t66PAE9wKwOMNk617nZdVaak4ew6Vxjw3L7qzy5KShEeLFcnOS+Ealh4hJK28TyIB15cleWeQe7U96zej1vDGULa41WvHOx+RIrouyDuKbPPyqptIo23yD3qIreIt1Bqhl7cneio9sZ1+6vgz5Gn2uuVAlXWkjUFKOgG5UwwXda8kyWNxz1+ykzDZKGHw+qo51EybHS8bKj3LPe86OVe2kYXkAaLSDqoc3bFJfvAEYlpRmuriKeCAJdE/RqHfkHwn1Vm2g1pUhFFrAwJQAtUnNpVHGuAwTgnGYohyT/l8QgTQm4uG/gqda/dyeEgO6rfbsnZOp7eS1OJwDjyCMx07mG8ABSoBpU0xA9ErBa3aODd06x4kF2/eOmNFwTVpo9ePDTPR8Mka5pc0gi+csxeYBQ7GuiZfGXRt3rXyqq9ijeA4sF43CXN9l+IHxNod0SSwsaC5pkF0H/ySEe8ScCaLwIwaR60ppsbbFjTnT1qmRGLl40A57DFI2extNCbxJNcXPOBFcq9y2LLZ2Bo9keWS68MNjkyyoyXzNybVxoPdFdN8gqsiddDTRorXA1dQ4UrkM+adkbp3/VBaMceX1/2WbhzyaKXHB5/pZw9os5AwAkYa5nGoqTrmvDMjjaSXOJPNfT+k4rC8NFT7FBvRwXzq08NnccIT5t+69DpZQhFxv3OXPGU2pUZk84yGKAJKYk93JNT8HtA92A8zUfdKP4JaD70bvMLsWWH9S/JyvFk8P8CxlBrXOuiK1zqYY7imKJHwSdvwH0THYZmULT3iifdh5RPan/S/wDZZ2kVuY8s1NC3O+B6K5EwNQwV3rmm7PaQadZH9kdyPkXal4/sbvCrAySxOve6ZLxpmWsu4eYIXh+MWoSSFwwFcBsBgAvqnDoQ2FsYFAWEkbFzrxH6l4PpHwhsbjdyJ8lwYsyeWXyem8TWKILo9HE4O6x1Lpv0ORaWOY4+T8u5ec4/xMTvddwaSDsXEYAn+g580W0wksIBx+vJZDhdyXT20pORi8j1URrgtlc4uOg+pW0Y2NGLgD3pKzF8bboHfliVSZgdnmuiDSXqcGRSlK6G3NAycgyTNrSmKSbE4JhrXEYj6K9o+TNxl4CC1syJIV2zx1wcsy0WF5NQR3Gi6OyvGBDfCiey8i0l4NCeb5Sl+tJwcl+ySeHeFcxS7DzT3j5JcJeDpDTI+CoQTmAu6uQbKwjd8vqjePkXbl4FqgHFlFLn0xFR9E12eQ/D6qRZXatCFNCeKXgUbbHd6s2293kj9jPygKhsbvlHejZB25+CvbBtXuRG2v5a9yD2NwypVVFlkGyN4i7c/Az2s6qRaW/MEj2aTl5qeyP8AlHmjePkNJ+D6NJHTD2R9ESyNAdiO8jApWy2Y0xx8Kha1mjdhh+leTm6quInvYemfrI9zwggxs/haP5UeeIYj848iVlcBl9ilciR51K0iSTQCpO+Q/ui8+Mk4m84tSDwAZaYBaYcKLFdJd5n08Ao/epAIAGwW+PPHH6mM8Mp+g1LJUnA5nRKEjGtRWuY3S/bzU1OyYZaLzTe5UrvssHkU2bLG4LlAeKv9iuY9nL+ILK7QzK6fPD6J+2n2dTi3LkQShXrw/wCFhOf1HRjjUQDTH3/5kKaWMaDzS1us7me03LWpXk+l/SAsb1LT7ThV7sKNbt3kenetcMJZJKMQyyjji5Mc4r0oaHXImXjWnI70Og5pH96TO94tHJorT/Mc/ILz/DYbovOGJAoPlboANNz4DRaDJV7CwwiqSPM7s5ctmk21v+avg37KwtROdFmCT+qkzURrHwPZ+T13DOkwfO2EsIcWuNfhNBWo9fJZ/HXVOdUvwD2pLxya1x54i7h5q3F310WOLEo5HRrObcFZkmzCo21WNxDhpZI1w9282vdXNb7HhUkmHunLHNdnwc78iD2A7qnUNOvoPuotFWnDI+iHHKjSJk5yCiwA43/0j7qxsNPi/SPupjlRRIq0iQ5yFZYJG4gB38N2vkaJc2gH4xnShaAQdiDkeS0r9Fm8Zsx//VoxA9sbjfw+ncjRC7kiWP8AzegVzX5/QLGjnZTTyVmTjceX+yxdp0appo1Htr8foPshVI+P+/JKdezU/pP2VH2lnP8AlKdgaHWD8T6fZQ6UfifT7LOFqZ8v6VY2yPb9J+yLENmf8/0UCf8AxPokza49v0n7KptbP7afsiwG3z/4g8whmY/OPRL9qbt6KptTf7CLAZ60/N/6qOvPzH9KWfaWbfVC7Qz+wiwPp9mjeBUig5/8pyBznYNIA3P9Fy5eE5cWe5rzR6DggDS5gObWu8jQ/VbVnk03FK7f3VcuUY27IypC87HEZg7e0BWnel+ofhUsFagY7aYV3XLknFPkFJrgkWdjfac6ozr7raVzJOaFaeKtpVuJyYADQnQNFKlcuWcpVwjWMdlchp87QCSHV1LgR6JSyWmoNGPpX5TRcuTfLEqUTL6U8abBC5xabxwYCKVd9tV8nsjnTPL3moBvO/M44gf1PhuuXL2uggo49vdnmdXNuevsjWvKwPNcuXYzBEg4IZdquXKRnpOjDbsT5NzdHhiUjxS0ElcuWWHmT+5vP+K+xnRSElFmauXLd+pkhCdxyKVs79Fy5UjOa4GmFFJXLlRgy4dr/suJXLkyTzHE7P1T6j3Ti3bm2lQMPpREhkBHuk91PuuXLOa4Lg+S5B+R3k37qpB/DP6fuuXLOjUqWE/+M+n/ANKrNizHkW/1K5cgCxjH4bvNv3XdUPw3ebfuuXJiIMQ+R3m37ob2D5D5t+65cgCAwfJ6t+6gu/If0/dcuQI//9k=',
            id: 4
        }]
    }
}

export const getCatalogByCategoryId = async (categoriaId) => {
    return {
        data: [{
            imagen: 'https://gastronomiaycia.republica.com/wp-content/uploads/2017/10/mastergastronomiaesah2017-680x453.jpg',
            titulo: 'El balon',
            puntuacion: 3,
            descripcion: 'lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf',
            costo: 40000,
            ubicacion: 'Quilmes',
            cantidad_personas: 2,
            cost: 10000
        }, {
            imagen: 'https://www.mexicodesconocido.com.mx/assets/images/destinos/teotihuacan/actividades/72_Teotihuacan_Escamoles4.jpg',
            titulo: 'El balonaso',
            puntuacion: 4,
            descripcion: 'eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa  eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa',
            costo: 35000,
            ubicacion: 'Belgrano',
            cantidad_personas: 2,
            cost: 20000
        },
        {
            imagen: 'https://gastronomiaycia.republica.com/wp-content/uploads/2017/10/mastergastronomiaesah2017-680x453.jpg',
            titulo: 'El balon',
            puntuacion: 3,
            descripcion: 'lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf',
            costo: 40000,
            ubicacion: 'Palermo',
            cantidad_personas: 2,
            cost: 25000
        }, {
            imagen: 'https://www.mexicodesconocido.com.mx/assets/images/destinos/teotihuacan/actividades/72_Teotihuacan_Escamoles4.jpg',
            titulo: 'El balonaso',
            puntuacion: 4,
            descripcion: 'eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa  eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa',
            costo: 35000,
            ubicacion: 'Belgrano',
            cantidad_personas: 2,
            cost: 10000
        }]
    }
}