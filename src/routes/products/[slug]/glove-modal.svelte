<script>
    import {
        Button, Modal,
        Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell
    } from 'flowbite-svelte';
    let outsideclose = false;

    const menSizeData = [
        {size: 'XS (6)', handWidth: '6.3 - 7” / 160 - 178 mm', handLength: '5.9 - 6.5” / 150 - 164 mm'},
        {size: 'S (7)', handWidth: '7” / 179 - 200 mm', handLength: '6.5 - 7” / 165 - 179 mm'},
        {size: 'M (8)', handWidth: '8 - 8.6” / 201 - 219 mm', handLength: '7 - 7.6” / 180 - 194 mm'},
        {size: 'XL (10)', handWidth: '9.25 - 9.8” / 235 - 249 mm', handLength: '8 - 8.6” / 205 - 219 mm '},
        {size: 'XXL (11)', handWidth: '9.85 - 10” / 250 - 265 mm', handLength: '8.7 - 9.25” / 220 - 235 mm'},
        {size: 'XXXL (12)', handWidth: '10.4 - 10.6” / 265 - 270 mm', handLength: '9.25 - 9.6” / 235 - 245 mm'},
    ]

</script>


<Button
        on:click={() => (outsideclose = true)}
        class="border-primary-800 border-2 shadow-sm shadow-primary-700"
>
    GLOVES SIZE GUIDE
</Button>
<div class="z-[100]">
    <Modal
            title="GLOVES SIZE GUIDE"
            bind:open={outsideclose}
            size="xl"
            autoclose outsideclose
    >
        <div class="space-y-6 flex flex-col">
            <div class="flex flex-col  md:flex-row gap-4">
                <div class="w-1/2 flex flex-col gap-4 font-medium text-gray-900 ">
                    <h1 class="py-2 font-extrabold">
                        MEASURING YOUR HAND FOR THE BEST FIT
                    </h1>
                    <p>
                        You can measure the length and width of your hand as illustrated above, and use the Size Guide to determine your size.
                    </p>
                    <p>
                        1. Wrap the tape measure around your hand at the widest part of the palm, and lightly close your hand to get your Hand Width measurement.
                    </p>
                    <p>
                        2. Once you have that measurement recorded, use a tape measure to determine the length of your hand from the tip of your longest finger to the base of your palm at the wrist. This is your Hand Length measurement.
                    </p>
                    <p>
                        3. You can then compare the measurements of your hand with the data supplied in the Size Guide to determine the best fitting size for you..
                    </p>
                </div>
                <div>
                    <img src="/images/glove-size-01.png" alt="glove size guide" class="object-contain h-96 w-96 p-2" width=1100 height=900 />
                </div>
            </div>
            <div>
                <Table>
                    <TableHead>
                        <TableHeadCell>MEN&apos;S SIZE</TableHeadCell>
                        <TableHeadCell>HAND WIDTH</TableHeadCell>
                        <TableHeadCell>HAND LENGTH</TableHeadCell>
                    </TableHead>
                    <TableBody class="divide-y">
                        {#each menSizeData as d (d)}
                            <TableBodyRow>
                                <TableBodyCell>{d.size}</TableBodyCell>
                                <TableBodyCell>{d.handWidth}</TableBodyCell>
                                <TableBodyCell>{d.handLength}</TableBodyCell>
                            </TableBodyRow>
                        {/each}

                    </TableBody>
                </Table>
            </div>
        </div>
        <svelte:fragment slot="footer">
            <Button>OK</Button>
        </svelte:fragment>
    </Modal>
</div>
