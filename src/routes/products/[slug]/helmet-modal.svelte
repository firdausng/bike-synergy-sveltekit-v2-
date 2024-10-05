<script>
    import {
        Button, Modal,
        Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell
    } from 'flowbite-svelte';
    let outsideclose = false;

    const data = [
        {size: 'Small', circumference: '50 - 57 cm'},
        {size: 'Unisize', circumference: ' 54 - 61 cm'},
        {size: 'Extra Large', circumference: '58 - 65 cm'},
    ]
</script>


<Button
        on:click={() => (outsideclose = true)}
        class="border-primary-800 border-2 shadow-sm shadow-primary-700"
>
    BIKE HELMET SIZE GUIDE
</Button>
<div class="z-[100]">
    <Modal
            title="BIKE HELMET SIZE GUIDE"
            bind:open={outsideclose}
            size="xl"
            autoclose outsideclose
    >
        <div class="space-y-6 flex flex-col">
            <div class="flex flex-col  md:flex-row gap-4">
                <div class="w-1/2 flex flex-col gap-4 font-medium text-gray-900">
                    <h1 class="py-2 font-extrabold">
                        HOW TO MEASURE YOUR SIZE
                    </h1>
                    <p>Wrap a measuring tape around your head, keeping the tape level from front to back. Note the measurement and reference the Size Guide. </p>
                    <p><span class={'font-extrabold text-green-500'}>Note:</span> Make sure the helmet fits with a little room when the fit system is loose, and sits low enough to protect your forehead without hindering your vision. Once you’ve got the right size, you can adjust the fit.</p>
                </div>
                <div>
                    <img src="/images/helmet-size-head.png" alt="helmet size guide" class="object-contain h-96 w-96 p-2" width={1100} height={900} />
                </div>
            </div>
            <div>
                <Table>
                    <TableHead>
                        <TableHeadCell>Size</TableHeadCell>
                        <TableHeadCell>Circumference</TableHeadCell>
                    </TableHead>
                    <TableBody class="divide-y">
                        {#each data as d (d)}
                            <TableBodyRow>
                                <TableBodyCell>{d.size}</TableBodyCell>
                                <TableBodyCell>{d.circumference}</TableBodyCell>
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
