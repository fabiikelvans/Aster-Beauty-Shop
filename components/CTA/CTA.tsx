import React from 'react';
import Image from "next/image";

function Cta() {
    return (
        <div className='cta'>
            <div className="cta__images">
                <div className="cta__images-1">
                    <Image
                        className='image'
                        src='https://images.unsplash.com/photo-1624819318229-f006595a4993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJlYXV0eSUyMHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                        alt="Image"
                        layout={"fill"}
                        objectFit={'cover'}
                    />
                </div>
                <div className="cta__images-2">
                    <Image
                        className='image'
                        src='https://images.unsplash.com/photo-1625753783470-ec2ab4efeeec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                        alt="Image"
                        layout={"fill"}
                        objectFit={'cover'}
                    />
                </div>
                <div className="cta__images-3">
                    <Image
                        className='image'
                        src='https://images.unsplash.com/photo-1619451427882-6aaaded0cc61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGJlYXV0eSUyMHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                        alt="Image"
                        layout={"fill"}
                        objectFit={'cover'}
                    />
                </div>
                <div className="cta__images-4">
                    <Image
                        className='image'
                        src='https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fGJlYXV0eSUyMHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                        alt="Image"
                        layout={"fill"}
                        objectFit={'cover'}
                    />
                </div>
            </div>

            <div className="cta__text">
              <div>
                  <span className="cta__text-1">
                      Discover You
                  </span><br/>
                  <span className="cta__text-2">
                      For Inner And
                  </span><br/>
                  <span className="cta__text-3">
                      Outer Beauty
                  </span>
              </div>
            </div>
        </div>
    );
}

export default Cta;