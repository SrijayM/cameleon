import React from 'react'

const TopRefer = () => {
  return (
    <div className='flex items-start flex-col p-[0px] gap-[28px] bg-background blue absolute w-[994px] h-[426px] left-[318px] top-[862px]'>
        <p className='flex-none flex-grow-0 order-none absolute not-italic leading-[24px] font-[Inter] text-[20px] tracking-[-0.02em] text-[#ADB3CC] font-semibold'>Top referring sites</p>
        <p className='flex-none flex-grow-0 order-1 absolute top-[30px] not-italic leading-[17px] font-[Inter] text-[14px] tracking-[-0.02em] text-[#585F80] font-normal'>Outbond links that come to your site</p>
      
        {/*Table */}
        <div class="table w-full absolute top-[75px] left-[10px] w-[994px] bg-background-blue border-spacing-y-[20px]">
            {/*Headers*/}
            <div class="table-header-group">
                <div class="table-row text-[#55597D] font-[Inter] font-normal leading-[19px]">
                <div class="table-cell text-left">No</div>
                <div class="table-cell text-left">Site title</div>
                <div class="table-cell text-left">Link</div>
                <div class="table-cell text-left">Total clicks</div>
                <div class="table-cell text-left">Referrer type</div>
                </div>
            </div>
            {/*Table Data*/}
            <div class="table-row-group">
                <div class="table-row table-row text-[#ADB3CC] font-[Inter] font-normal leading-[19px] text-[16px]">
                <div class=" table-cell w-[45px]">1.</div>
                <div class="table-cell w-[269px]">Stack Overflow</div>
                <div  class="table-cell w-[314px] text-[#0931F5] hover:underline cursor-pointer"><a href="https://stackoverflow.com/questions/45830028/rel-nofollow-noopener-possible-to-have-both-at-the-same-time">https://stackoverflow.com/question/..</a> </div>
                <div class="table-cell w-[123px]">120</div>
                <div class="table-cell w-[308x]">nofollow, noopener</div>
                </div>
                <div class="table-row table-row text-[#ADB3CC] font-[Inter] font-normal leading-[19px] text-[16px]">
                <div class="table-cell">2.</div>
                <div class="table-cell">Youtube</div>
                <div class="table-cell text-[#0931F5] hover:underline cursor-pointer"><a href="https://stackoverflow.com/questions/45830028/rel-nofollow-noopener-possible-to-have-both-at-the-same-time">https://www.youtube.com/?v=7wB1j..</a></div>
                <div class="table-cell">14,522</div>
                <div class="table-cell">nofollow</div>
                </div>
                <div class="table-row table-row text-[#ADB3CC] font-[Inter] font-normal leading-[19px] text-[16px]">
                <div class="table-cell">3.</div>
                <div class="table-cell">Github</div>
                <div class="table-cell text-[#0931F5] hover:underline cursor-pointer"><a href="https://stackoverflow.com/questions/45830028/rel-nofollow-noopener-possible-to-have-both-at-the-same-time">https://github.com/andrew/tabler-x..</a></div>
                <div class="table-cell">36</div>
                <div class="table-cell">nofollow</div>
                </div>
                <div class="table-row table-row text-[#ADB3CC] font-[Inter] font-normal leading-[19px] text-[16px]">
                <div class="table-cell">4.</div>
                <div class="table-cell">Gosh William</div>
                <div class="table-cell text-[#0931F5] hover:underline cursor-pointer"><a href="https://stackoverflow.com/questions/45830028/rel-nofollow-noopener-possible-to-have-both-at-the-same-time">https://gwilliam.co/blog/capture-fro..</a></div>
                <div class="table-cell">580</div>
                <div class="table-cell">ugc</div>
                </div>
                <div class="table-row table-row text-[#ADB3CC] font-[Inter] font-normal leading-[19px] text-[16px]">
                <div class="table-cell">5.</div>
                <div class="table-cell">Stack Overflow</div>
                <div class="table-cell text-[#0931F5] hover:underline cursor-pointer"><a href="https://stackoverflow.com/questions/45830028/rel-nofollow-noopener-possible-to-have-both-at-the-same-time">https://stackoverflow.com/question/..</a></div>
                <div class="table-cell">112</div>
                <div class="table-cell">nofollow, noopener</div>
                </div>
                <div class="table-row table-row text-[#ADB3CC] font-[Inter] font-normal leading-[19px] text-[16px]">
                <div class="table-cell">6.</div>
                <div class="table-cell">Stack Overflow</div>
                <div class="table-cell text-[#0931F5] hover:underline cursor-pointer"><a href="https://stackoverflow.com/questions/45830028/rel-nofollow-noopener-possible-to-have-both-at-the-same-time">https://stackoverflow.com/question/..</a></div>
                <div class="table-cell">4</div>
                <div class="table-cell">nofollow, noopener</div>
                </div>
                <div class="table-row table-row text-[#ADB3CC] font-[Inter] font-normal leading-[19px] text-[16px]">
                <div class="table-cell">7.</div>
                <div class="table-cell">Stack Overflow</div>
                <div class="table-cell text-[#0931F5] hover:underline cursor-pointer"><a href="https://stackoverflow.com/questions/45830028/rel-nofollow-noopener-possible-to-have-both-at-the-same-time">https://stackoverflow.com/question/..</a></div>
                <div class="table-cell">51</div>
                <div class="table-cell">nofollow, noopener</div>
                </div>
                <div class="table-row table-row text-[#ADB3CC] font-[Inter] font-normal leading-[19px] text-[16px]">
                <div class="table-cell">8.</div>
                <div class="table-cell">Stack Overflow</div>
                <div class="table-cell text-[#0931F5] hover:underline cursor-pointer"><a href="https://stackoverflow.com/questions/45830028/rel-nofollow-noopener-possible-to-have-both-at-the-same-time">https://stackoverflow.com/question/..</a></div>
                <div class="table-cell">68</div>
                <div class="table-cell">nofollow, noopener</div>
                </div>
            </div>
        </div>

        {/*Table Lines*/}
        <hr class=" absolute top-[92px] w-[994px] my-8 h-[1px] bg-gray-100 border-0 dark:bg-[#55597D]"/>
        <hr class=" absolute top-[131px] w-[994px] my-8 h-[1px] bg-gray-100 border-0 dark:bg-[#55597D]"/>
        <hr class=" absolute top-[170px] w-[994px] my-8 h-[1px] bg-gray-100 border-0 dark:bg-[#55597D]"/>
        <hr class=" absolute top-[209px] w-[994px] my-8 h-[1px] bg-gray-100 border-0 dark:bg-[#55597D]"/>
        <hr class=" absolute top-[248px] w-[994px] my-8 h-[1px] bg-gray-100 border-0 dark:bg-[#55597D]"/>
        <hr class=" absolute top-[287px] w-[994px] my-8 h-[1px] bg-gray-100 border-0 dark:bg-[#55597D]"/>
        <hr class=" absolute top-[326px] w-[994px] my-8 h-[1px] bg-gray-100 border-0 dark:bg-[#55597D]"/>
        <hr class=" absolute top-[365px] w-[994px] my-8 h-[1px] bg-gray-100 border-0 dark:bg-[#55597D]"/>
        <hr class=" absolute top-[404px] w-[994px] my-8 h-[1px] bg-gray-100 border-0 dark:bg-[#55597D]"/>
    </div>
  )
}

export default TopRefer